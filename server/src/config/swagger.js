import swaggerJsdoc from "swagger-jsdoc";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, "../..");

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "CRM Backend API (Node.js)",
			version: "1.0.0",
			description: "API documentation for the CRM system backend built with Node.js and Express",
			contact: {
				name: "API Support"
			}
		},
		servers: [
			{
				url: "http://localhost:8000",
				description: "Local development server"
			},
			{
				url: "http://localhost:8008",
				description: "Local server (port 8008)"
			},
			{
				url: "http://3.85.144.221:8008",
				description: "Production server"
			}
		],
		components: {
			securitySchemes: {
				bearerAuth: {
					type: "http",
					scheme: "bearer",
					bearerFormat: "JWT",
					description: "Enter JWT token obtained from /api/auth/login or /api/auth/signup"
				}
			}
		}
	},
	apis: [
		join(projectRoot, "src/routes/*.js"),
		join(projectRoot, "src/server.js")
	]
};

export const swaggerSpec = swaggerJsdoc(options);
