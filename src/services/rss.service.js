import RSSParser from "rss-parser";
import { Post } from '../models/post.model.js'

const parser = new RSSParser();
const feedURL = "https://lifehacker.com/feed/rss"

export const fetchAndSavePosts = async () => {
   try {
      const feed = await parser.parseURL(feedURL)
      const posts = feed.items.map(item => ({
         title: item.title,
         link: item.link,
         pubDate: new Date(item.pubDate)
      }));

      for (const post of posts) {
         await Post.findOrCreate({ where: { link: post.link }, defaults: post });
      }

   } catch (error) {
      console.error('Error fetching RSS feed:', error);
   }
}

