/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as winston from 'winston';
import 'winston-daily-rotate-file';
import * as SlackHook from 'winston-slack-webhook-transport';
import * as winstonMongoDB from 'winston-mongodb';

// Create transports instance
// console winston transport
// const transports = [
//   new winston.transports.Console({
//     format: winston.format.combine(
//       // Add a timestamp to the console logs
//       winston.format.timestamp(),
//       // Add colors to you logs
//       winston.format.colorize(),
//       // What the details you need as logs
//       winston.format.printf(({ timestamp, level, message, context, trace }) => {
//         return `${timestamp} [${context}] ${level}: ${message}${trace ? `\n${trace}` : ''}`;
//       }),
//     ),
//   }),
// ];

// File winston transport
// const transports = [
//   new winston.transports.DailyRotateFile({
//     filename: 'logs/application-%DATE%.log',
//     datePattern: 'YYYY-MM-DD',
//     zippedArchive: true,
//     maxSize: '20m',
//     maxFiles: '14d',
//     format: winston.format.combine(
//       winston.format.timestamp(),
//       winston.format.json(),
//     ),
//   }),
// ];

// Slack winston transport
// const transports = [
//   new SlackHook({
//     webhookUrl: 'YOUR_SLACK_WEBHOOK_URL',
//     channel: '#logs',
//     username: 'LoggerBot',
//     level: 'error',
//     format: winston.format.combine(
//       winston.format.timestamp(), // Add a timestamp to Slack logs
//       winston.format.printf(({ timestamp, level, message, context, trace }) => {
//         return `${timestamp} [${context}] ${level}: ${message}${trace ? `\n${trace}` : ''}`;
//       }),
//     ),
//   }),
// ];

// MongoDB winston transport
const transports = [
  new winstonMongoDB.MongoDB({
    level: 'info',
    db: 'mongodb://127.0.0.1:27017/logger',
    options: {
      useUnifiedTopology: true,
    },
    collection: 'logs',
    format: winston.format.combine(
      winston.format.timestamp(), // Add a timestamp to MongoDB logs
      winston.format.json(), // Use JSON format for MongoDB logs
    ),
  }),
];

// Create and export the logger instance
export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports,
});
