import cron from 'node-cron';
import { fetchAndSavePosts } from "../services/rss.service.js";

export function startCronJob() {
   cron.schedule('0 0 * * *', async () => {
      await fetchAndSavePosts()
   });
}