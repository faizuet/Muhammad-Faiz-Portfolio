import { useEffect, useRef, useState } from "preact/hooks";

type FormStatus = { kind: "success" | "error"; message: string } | null;

const inputClass = "mt-1.5 w-full rounded-lg border border-primaryLiteAlt bg-background px-3.5 py-3 text-foreground outline-none transition focus-visible:ring-2 focus-visible:ring-primary";

export default function ContactForm() {
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState<FormStatus>(null);
    const statusTimer = useRef<number | undefined>(undefined);

    useEffect(() => () => {
        if (statusTimer.current !== undefined) window.clearTimeout(statusTimer.current);
    }, []);

    const handleSubmit = async (event: SubmitEvent) => {
        event.preventDefault();
        if (!(event.currentTarget instanceof HTMLFormElement) || isSending) return;

        const form = event.currentTarget;
        const formData = new FormData(form);
        const name = String(formData.get("name") ?? "").trim();
        const email = String(formData.get("email") ?? "").trim();
        const message = String(formData.get("message") ?? "").trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !message) {
            setStatus({ kind: "error", message: "Please complete all fields." });
            return;
        }
        if (!emailRegex.test(email)) {
            setStatus({ kind: "error", message: "Please enter a valid email address." });
            return;
        }

        const serviceId = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;
        if (!serviceId || !templateId || !publicKey || [serviceId, templateId, publicKey].some((value) => value.startsWith("your_"))) {
            setStatus({ kind: "error", message: "The contact form is not configured yet. Please email me directly." });
            return;
        }

        setIsSending(true);
        setStatus(null);
        try {
            const { default: emailjs } = await import("@emailjs/browser");
            await emailjs.send(serviceId, templateId, { from_name: name, from_email: email, message }, publicKey);
            form.reset();
            setStatus({ kind: "success", message: "Message sent. Thanks for reaching out!" });
        } catch {
            setStatus({ kind: "error", message: "Your message could not be sent. Please email me directly and try again later." });
        } finally {
            setIsSending(false);
            if (statusTimer.current !== undefined) window.clearTimeout(statusTimer.current);
            statusTimer.current = window.setTimeout(() => setStatus(null), 6000);
        }
    };

    return (
        <form onSubmit={handleSubmit} class="w-full space-y-4" noValidate>
            <div>
                <label for="contact-name" class="block text-sm font-medium">Name <span aria-hidden="true">*</span></label>
                <input class={inputClass} type="text" id="contact-name" name="name" placeholder="Your name" autoComplete="name" maxLength={120} required />
            </div>
            <div>
                <label for="contact-email" class="block text-sm font-medium">Email <span aria-hidden="true">*</span></label>
                <input class={inputClass} type="email" id="contact-email" name="email" placeholder="you@example.com" autoComplete="email" maxLength={254} required />
            </div>
            <div>
                <label for="contact-message" class="block text-sm font-medium">Message <span aria-hidden="true">*</span></label>
                <textarea class={`${inputClass} min-h-36 resize-y`} id="contact-message" name="message" placeholder="How can I help?" rows={5} maxLength={5000} required></textarea>
            </div>
            <div class="flex flex-wrap items-center gap-3">
                <button class="LinkBtnGradient inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 font-medium disabled:cursor-wait disabled:opacity-60" type="submit" disabled={isSending}>
                    {isSending ? "Sending…" : "Send message"}
                    {isSending ? (
                        <svg class="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-opacity=".25" stroke-width="3"/><path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>
                    ) : (
                        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z"/></svg>
                    )}
                </button>
                <p class="text-sm" role={status?.kind === "error" ? "alert" : "status"} aria-live={status?.kind === "error" ? "assertive" : "polite"}>
                    {status && <span class={status.kind === "success" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>{status.message}</span>}
                </p>
            </div>
        </form>
    );
}
