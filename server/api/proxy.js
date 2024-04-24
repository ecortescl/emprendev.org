export default defineEventHandler(async (event) => {
  if (event.node.req.method === "POST") {
    const body = await readBody(event);
    const { email, listIds } = body;
    const runtimeConfig = useRuntimeConfig();
    const apiBrevo = runtimeConfig.public.apiBrevo;

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiBrevo,
      },
      body: JSON.stringify({
        email,
        listIds,
      }),
    };

    try {
      const response = await fetch(
        "https://api.brevo.com/v3/contacts",
        options
      );
      const data = await response.json();

      if (response.ok) {
        return data;
      } else {
        event.node.res.statusCode = response.status;
        return { message: "Error al suscribirse" };
      }
    } catch (error) {
      console.error("Error al suscribirse:", error);
      event.node.res.statusCode = 500;
      return { message: "Error al suscribirse" };
    }
  } else {
    event.node.res.statusCode = 405;
    return { message: "Método no permitido" };
  }
});
