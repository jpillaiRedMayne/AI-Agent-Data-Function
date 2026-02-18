AI‑Agent‑Data‑Function is an Azure Function designed to act as the data‑processing bridge between enterprise data stored in Microsoft Fabric and a Copilot AI Agent. Its primary purpose is to fetch analytical or operational data from Fabric, transform it into chart‑ready structures, and return it to the AI Agent in a clean, consumable format.
The function retrieves data from Fabric Lakehouse or Warehouse endpoints, prepares the dataset for visualization, and generates a chart image (encoded as Base64) that the AI Agent can display directly in the conversation. This enables the agent to provide users with dynamic, data‑driven insights—such as trends, KPIs, comparisons, or time‑series analytics—without exposing Fabric directly to the agent.
The function supports:
- Secure retrieval of structured data from Microsoft Fabric
- Transformation of raw data into chart‑friendly formats
- Generation of chart images using a server‑side renderer
- Returning results as JSON with Base64‑encoded images for seamless Copilot integration
- Unique file naming for each generated chart
This function serves as the backend “data engine” for the AI Agent, enabling rich, visual, and context‑aware responses powered by enterprise data.
