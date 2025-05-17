try {
    const webhookData = `
    {
        "payload": {
            "event": {
                "id": "8c4e826d-fcdd-43c3-b109-5823ce167527",
                "type": 5,
                "data": {
                    "activityLogs": [
                        {
                            "entryDate": 1732804030,
                            "logType": 13,
                            "keyId": 1685274779,
                            "time1": 1732804029,
                            "operationId": 0
                        },
                        {
                            "entryDate": 1732804027,
                            "logType": 47,
                            "keyId": 0,
                            "operationId": 0
                        }
                    ]
                },
                "date": "2024-11-28T14:27:11.000Z",
                "proxyTransportMethod": 2,
                "proxyId": "EB1X02f9bf0a"
            },
            "product": {
                "id": "RW1X04d17c3f",
                "type": 1
            }
        }
    }`;

    const webhookjson = JSON.parse(webhookData);

    const proxyId = webhookjson.payload.event.proxyId;
    const productId = webhookjson.payload.product.id;

    // Convert to strings safely
    const bridgeId = proxyId ? String(proxyId) : "null";
    const lockId = productId ? String(productId) : "null";

    console.log("Bridge ID:", bridgeId);
    console.log("Lock ID:", lockId);

    // Checking activity logs
    if (
        !webhookjson.payload.event.data.activityLogs ||
        webhookjson.payload.event.data.activityLogs.length === 0
    ) {
        console.error("No activity logs available.");
        return;
    }

    const logType19 = webhookjson.payload.event.data.activityLogs.find(
        (log) => log.logType === 19
    );

    console.log("Log Type 19:", logType19 || "Not found");

    const result = JSON.stringify({
        bridgeId: bridgeId,
        lockId: lockId,
        logType19: logType19 || null,
    });

    console.log("Result JSON:", result);
} catch (error) {
    console.error("Error parsing data:", error.message);
}
