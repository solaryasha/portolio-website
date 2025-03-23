// "use server"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  const response = await fetch('/api/send', {
    method: "POST",
    body: JSON.stringify({ name, email, message })
  });

  if (!response.ok) throw Error('Something bad happendd')

  return {
    message: "Thanks for your message! I'll get back to you soon.",
  }
}

