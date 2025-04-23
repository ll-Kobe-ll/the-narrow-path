// src/app/api/submit/route.ts
export async function POST(req: Request) {
    const body = await req.json()
  
    const zapierWebhook = "https://hooks.zapier.com/hooks/catch/22624977/2xp79gs/"
  
    const zapierResponse = await fetch(zapierWebhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
  
    const result = await zapierResponse.text()
  
    return new Response(result, {
      status: zapierResponse.status
    })
  }
  