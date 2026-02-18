import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { ChartJSNodeCanvas } from "chartjs-node-canvas";
import { ChartConfiguration } from "chart.js";


export async function getPortfolioData(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    console.log("Get Portfolio Data Loading");

    const name = request.query.get('name') || await request.text() || 'world';

    const width = 800;
    const height = 400;
    const chartCallback = () => {};

    const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height, chartCallback });

      const configuration : ChartConfiguration ={
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr"],
            datasets: [
                {
                    label: "Sales",
                    data: [10, 20, 15, 30],
                    borderColor: "blue",
                    fill: false
                }
            ]
        }
    };

    console.log("chart being rendered");

    let image,base64,fileNameforChart;
    try
    {
        image = await chartJSNodeCanvas.renderToBuffer(configuration);

        base64 = image.toString("base64");

        fileNameforChart = `chart-${Date.now()}-${Math.random().toString(36).slice(2)}.png`;

    }
    catch (error:any)
    {
        console.error("Error generating chart:", error);
         return {
            status: 500,
            jsonBody: {
                message: "Failed to generate chart",
                error: error instanceof Error ? error.message : String(error)
            }
        };

    }

     return {
    status: 200,
    jsonBody: {
        contentType: "image/png",
        fileName: fileNameforChart,
        data: base64
    }

    };

};

app.http('getPortfolioData', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: getPortfolioData
});
