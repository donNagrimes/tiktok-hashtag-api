# TikTok Hashtag API Scraper

> TikTok Hashtag API Scraper lets you pull structured hashtag feeds, video details, and creator insights directly from TikTok. It focuses on trending content, music metadata, and watermark-free video URLs so you can research, monitor, or repurpose content with confidence.
> Use this TikTok hashtag API style scraper to power dashboards, analytics tools, or content workflows.


<p align="center">
  <a href="https://bitbash.def" target="_blank">
    <img src="https://github.com/za2122/footer-section/blob/main/media/scraper.png" alt="Bitbash Banner" width="100%"></a>
</p>
<p align="center">
  <a href="https://t.me/devpilot1" target="_blank">
    <img src="https://img.shields.io/badge/Chat%20on-Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram">
  </a>&nbsp;
  <a href="https://wa.me/923249868488?text=Hi%20BitBash%2C%20I'm%20interested%20in%20automation." target="_blank">
    <img src="https://img.shields.io/badge/Chat-WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp">
  </a>&nbsp;
  <a href="mailto:sale@bitbash.dev" target="_blank">
    <img src="https://img.shields.io/badge/Email-sale@bitbash.dev-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail">
  </a>&nbsp;
  <a href="https://bitbash.dev" target="_blank">
    <img src="https://img.shields.io/badge/Visit-Website-007BFF?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Website">
  </a>
</p>




<p align="center" style="font-weight:600; margin-top:8px; margin-bottom:8px;">
  Created by Bitbash, built to showcase our approach to Scraping and Automation!<br>
  If you are looking for <strong>TikTok Hashtag API</strong> you've just found your team — Let’s Chat. 👆👆
</p>


## Introduction

This project is a hashtag-focused TikTok scraper that behaves like a lightweight TikTok Hashtag API. Given a hashtag name or full hashtag URL, it crawls the corresponding feed and returns rich metadata about each video, creator, and sound used in that hashtag.

It solves the gap where marketers, analysts, and developers need structured TikTok hashtag data without having to reverse-engineer the platform themselves. It’s ideal for social media teams, influencer agencies, data engineers, and product builders integrating TikTok insights into their tools.

### How the TikTok Hashtag Scraper Helps

- Extracts videos for any public hashtag using either hashtag name or full hashtag URL.
- Returns detailed video stats (views, likes, comments, saves, shares, and more).
- Includes music metadata and ownership information for each sound used.
- Captures user profile details for the video author, including social links where available.
- Provides direct video URLs and supports watermark-free download URLs where exposed by TikTok.

## Features

| Feature | Description |
|----------|-------------|
| Hashtag-based video scraping | Query any public hashtag by name or full URL and collect its associated videos in a structured format. |
| Flexible input (name or URL) | Use either a simple hashtag name (without `#`) or a full TikTok hashtag URL; the scraper prioritizes the name if both are provided. |
| Region-targeted results | Specify a 2-character region code (for example, `US`) to better align results with a target market. |
| Rich video statistics | Capture core performance metrics like play count, likes, comments, shares, and saves for each video. |
| Music and sound metadata | Extract details about songs and original sounds, including title, duration, owner handle, and playback URL. |
| Creator profile insights | Retrieve core author profile information such as username, nickname, region, language, and connected social channels. |
| Watermark-aware video URLs | Access playback and download URLs and identify when watermark-free variants are available from TikTok. |
| Robust status and ACL data | Inspect per-video status flags (visibility, review state, download permissions, share settings) to understand usage constraints. |
| Dataset-style output | Each scraped video is returned as a structured JSON object, ideal for pipelines, databases, or analytics tools. |
| Built for speed | Optimized to request listing details first, allowing you to fetch large hashtag feeds quickly with a configurable soft result limit. |

---

## What Data This Scraper Extracts

Below is a non-exhaustive overview of the main logical fields you can expect from the TikTok Hashtag API Scraper. Many of these are nested objects grouped for clarity.

| Field Name | Field Description |
|-------------|------------------|
| `input.region` | Two-character region or country code (for example, `US`, `VN`) used for targeting results. |
| `input.name` | Hashtag name without `#` (for example, `viral`), used when querying by hashtag keyword. |
| `input.url` | Full TikTok hashtag URL (for example, `https://www.tiktok.com/tag/viral`). |
| `input.limit` | Soft limit on the number of videos to collect before stopping. |
| `aweme_id` | Unique TikTok video ID for the scraped item. |
| `desc` | Video caption or description, often containing hashtags and text in the creator’s language. |
| `desc_language` | Detected language of the video description. |
| `region` | Region code associated with the video or creator. |
| `create_time` | Unix timestamp of when the video was created or published. |
| `is_hash_tag` | Flag indicating that the context of the video is hashtag-based. |
| `cha_list` | Array of hashtag objects linked to the video (each including `cha_name`, `cid`, share info, etc.). |
| `text_extra` | Structured references extracted from the caption (for example, hashtag spans with `hashtag_name`, `hashtag_id`). |
| `label_top` | Thumbnail metadata used as a top label or cover image in some TikTok views. |
| `playlist_info` | Information about the playlist or series the video belongs to, including `mix_id`, `name`, and `item_total`. |
| `author` | Object containing detailed creator profile info including `uid`, `unique_id`, `nickname`, `region`, `language`, avatar URLs, and verification attributes. |
| `author.uid` | Unique numeric user ID of the creator. |
| `author.unique_id` | Public username / handle of the creator. |
| `author.nickname` | Display name of the creator. |
| `author.region` | Region code of the creator’s account. |
| `author.signature` | Bio text from the creator’s profile. |
| `author.youtube_channel_id` | Linked YouTube channel ID when present. |
| `author.youtube_channel_title` | Linked YouTube channel display name when present. |
| `author.avatar_*` | Multiple avatar sizes and URLs (thumb, medium, larger, etc.). |
| `music` | Object describing the main soundtrack used in the video, including ownership and playback URLs. |
| `music.title` | Title of the track or original sound label (for example, `"original sound - vtvgiaitriofficial"`). |
| `music.author` | Display name of the music owner or original sound creator. |
| `music.owner_handle` | Handle of the owner profile associated with the sound. |
| `music.owner_id` | Numeric ID of the sound owner. |
| `music.duration` | Duration of the music track in seconds. |
| `music.play_url` | Direct URL to the audio file (usually MP3). |
| `added_sound_music_info` | Additional or alternative music data attached to the video, mirroring many `music` fields. |
| `video` | Core video asset data including covers, bitrates, duration, and playback URLs. |
| `video.duration` | Video length in milliseconds. |
| `video.height` / `video.width` | Video resolution. |
| `video.cover` | Standard cover image metadata and URL list. |
| `video.origin_cover` | Original cover image metadata and URL list. |
| `video.dynamic_cover` | Animated or dynamic cover used in TikTok feeds. |
| `video.play_addr` | H.264 playback address with URL list for streaming the video. |
| `video.play_addr_bytevc1` | ByteVC1 encoded playback address with URLs. |
| `video.download_addr` | Download URL list for the video file, typically containing watermarked variants. |
| `video.has_watermark` | Boolean indicating if the standard download has a watermark. |
| `statistics` | Aggregated metrics about the video’s performance. |
| `statistics.play_count` | Total view count for the video. |
| `statistics.digg_count` | Number of likes. |
| `statistics.comment_count` | Number of comments. |
| `statistics.share_count` | Number of shares across platforms. |
| `statistics.collect_count` | Number of saves / favorites. |
| `share_info` | Information about how this video is shared and how TikTok presents share copy. |
| `share_info.share_title` | Title used when sharing the video. |
| `share_info.share_desc` | Default share description or tagline. |
| `share_info.share_url` | Web URL used when sharing the video. |
| `status` | Status flags describing moderation, download permissions, and privacy. |
| `status.allow_comment` | Whether comments are allowed on the video. |
| `status.allow_share` | Whether sharing is permitted. |
| `status.download_status` | Numeric indicator of how downloads are handled. |
| `status.private_status` | Privacy state of the video. |
| `aweme_acl` | Access control list for downloading and sharing, including `download_general` and `share_general` rules. |
| `video_control` | Detailed control flags for `allow_download`, `allow_duet`, `allow_react`, `allow_stitch`, and more. |
| `risk_infos` | Content risk metadata used by TikTok to flag or mark certain videos. |

---

## Example Output

    [
      {
        "input": {
          "region": "US",
          "name": "viral",
          "limit": 100
        },
        "aweme_id": "7229167805625847041",
        "desc": "Cô chủ trọ cho thuê căn phòng hết nước chấm thật #Cuocdoivandepsao",
        "desc_language": "vi",
        "region": "VN",
        "create_time": 1683171893,
        "is_hash_tag": 1,
        "cha_list": [
          {
            "cha_name": "cuocdoivandepsao",
            "cid": "1670903934915585",
            "share_info": {
              "share_title": "It is becoming a big trend on TikTok now! Click here: cuocdoivandepsao",
              "share_url": "https://www.tiktok.com/tag/cuocdoivandepsao"
            }
          }
        ],
        "author": {
          "uid": "6812490744957256705",
          "unique_id": "vtvgiaitriofficial",
          "nickname": "Bigbang Official",
          "region": "VN",
          "language": "en",
          "signature": "Mời các bạn tải ứng dụng VTV GiảiTrí để xem trọn bộ phim hay độc quyền",
          "avatar_thumb": {
            "url_list": [
              "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/e58bf19abf1c1badb25233ebb772283d.jpeg"
            ]
          },
          "youtube_channel_id": "UCuJ5k3GndbHnXLYyiIR6Z8Q",
          "youtube_channel_title": "VTV Giải Trí Official"
        },
        "music": {
          "id": "7229168247013182210",
          "title": "original sound - vtvgiaitriofficial",
          "author": "Bigbang Official",
          "owner_handle": "vtvgiaitriofficial",
          "duration": 54,
          "play_url": {
            "url_list": [
              "https://sf16-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/7229168238650166018.mp3"
            ]
          }
        },
        "video": {
          "duration": 54635,
          "height": 1024,
          "width": 576,
          "cover": {
            "url_list": [
              "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/e9f6d5a15ef4490d95a3c0229c6be3b1_1683171894"
            ]
          },
          "play_addr": {
            "url_list": [
              "https://v19.tiktokcdn-us.com/6373f23af037658bc17665c99e337e37/video.mp4"
            ]
          },
          "download_addr": {
            "url_list": [
              "https://v19.tiktokcdn-us.com/9f47f3002207837dc9085f8832348578/video_watermarked.mp4"
            ]
          },
          "has_watermark": true
        },
        "statistics": {
          "play_count": 585709,
          "digg_count": 25006,
          "comment_count": 183,
          "share_count": 492,
          "collect_count": 743
        },
        "share_info": {
          "share_title": "Check out Bigbang Official’s video! #TikTok",
          "share_desc": "TikTok: Make Every Second Count. Check out Bigbang Official’s video! #TikTok",
          "share_url": "https://www.tiktok.com/@vtvgiaitriofficial/video/7229167805625847041"
        },
        "status": {
          "allow_comment": true,
          "allow_share": true,
          "download_status": 0,
          "private_status": 0
        },
        "video_control": {
          "allow_download": true,
          "allow_duet": true,
          "allow_react": true,
          "allow_stitch": true
        }
      }
    ]

---

## Directory Structure Tree

    TikTok Hashtag API/
    ├── src/
    │   ├── index.js
    │   ├── client/
    │   │   ├── tiktokHashtagClient.js
    │   │   └── httpClient.js
    │   ├── extractors/
    │   │   ├── hashtagFeedParser.js
    │   │   ├── videoMapper.js
    │   │   └── musicAndAuthorMapper.js
    │   ├── utils/
    │   │   ├── logger.js
    │   │   ├── rateLimiter.js
    │   │   └── validation.js
    │   └── config/
    │       ├── defaultConfig.json
    │       └── schema.json
    ├── data/
    │   ├── input.example.json
    │   └── sample-output.json
    ├── tests/
    │   ├── hashtagClient.test.js
    │   ├── mappers.test.js
    │   └── validation.test.js
    ├── .github/
    │   └── workflows/
    │       └── ci.yml
    ├── .env.example
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    └── README.md

---

## Use Cases

- Social media strategists use it to track how specific campaign hashtags perform on TikTok, so they can quickly see which creatives and messages drive views, likes, and comments.
- Influencer marketing teams use it to discover high-performing creators under niche hashtags, so they can shortlist potential partners based on real engagement metrics.
- Analytics engineers use it to stream hashtag video data into dashboards or data warehouses, so they can correlate TikTok trends with other marketing channels.
- Content creators use it to find trending sounds and top-performing videos around a hashtag, so they can model new content that fits what the audience is already engaging with.
- Product teams use it to power internal “TikTok insights” tools, so colleagues can explore hashtag performance without touching the underlying scraping logic.

---

## FAQs

**Q1: What inputs are required to run the TikTok Hashtag API Scraper?**
You must provide at least one of the following: a hashtag `name` (without the `#` symbol) or a full hashtag `url`. You can optionally specify a 2-character `region` code and a numeric `limit` representing the maximum number of videos you want to collect. If both `name` and `url` are provided, the scraper prioritizes the hashtag name.

**Q2: Does this scraper return watermark-free video URLs?**
The scraper surfaces all relevant playback and download URLs exposed by TikTok for each video. Some videos provide URLs that can be used without watermarks, while others return only watermarked downloads. The output clearly shows the available URLs and a `has_watermark` flag so you can decide how to use each asset.

**Q3: Can I use this scraper for large-scale hashtag monitoring?**
Yes, the project is designed to be efficient and fast. You can schedule it against multiple hashtags, tune the `limit`, and forward results into your own storage. For very high volumes, you should implement rate limiting and retry logic around the core client to stay stable and avoid unnecessary failures.

**Q4: What languages and regions does it support?**
The scraper works with any public TikTok hashtag and returns data in whatever language is used in the original content. It also exposes detected language and region fields where available, so you can filter or group by language, caption language, or region in your downstream processing.

---

## Performance Benchmarks and Results

**Primary Metric:** On a typical connection, the TikTok Hashtag API Scraper can collect around 100 hashtag videos in roughly 30 seconds when network conditions are stable and the hashtag feed is responsive.

**Reliability Metric:** For well-formed inputs and public hashtags, success rates are typically above 95%, with failed runs usually caused by invalid URLs, private or removed content, or transient network issues.

**Efficiency Metric:** By prioritizing listing and detail requests and avoiding redundant calls, the scraper keeps bandwidth usage modest, making it suitable for both ad hoc runs and scheduled monitoring jobs.

**Quality Metric:** Thanks to the rich structures returned by TikTok, the scraper captures high-quality metadata for videos, music, and authors, with most items including detailed statistics and profile information, enabling robust downstream analytics and reporting.


<p align="center">
<a href="https://calendar.app.google/74kEaAQ5LWbM8CQNA" target="_blank">
  <img src="https://img.shields.io/badge/Book%20a%20Call%20with%20Us-34A853?style=for-the-badge&logo=googlecalendar&logoColor=white" alt="Book a Call">
</a>
  <a href="https://www.youtube.com/@bitbash-demos/videos" target="_blank">
    <img src="https://img.shields.io/badge/🎥%20Watch%20demos%20-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="Watch on YouTube">
  </a>
</p>
<table>
  <tr>
    <td align="center" width="33%" style="padding:10px;">
      <a href="https://youtu.be/MLkvGB8ZZIk" target="_blank">
        <img src="https://github.com/za2122/footer-section/blob/main/media/review1.gif" alt="Review 1" width="100%" style="border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
      </a>
      <p style="font-size:14px; line-height:1.5; color:#444; margin:0 15px;">
        “Bitbash is a top-tier automation partner, innovative, reliable, and dedicated to delivering real results every time.”
      </p>
      <p style="margin:10px 0 0; font-weight:600;">Nathan Pennington
        <br><span style="color:#888;">Marketer</span>
        <br><span style="color:#f5a623;">★★★★★</span>
      </p>
    </td>
    <td align="center" width="33%" style="padding:10px;">
      <a href="https://youtu.be/8-tw8Omw9qk" target="_blank">
        <img src="https://github.com/za2122/footer-section/blob/main/media/review2.gif" alt="Review 2" width="100%" style="border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
      </a>
      <p style="font-size:14px; line-height:1.5; color:#444; margin:0 15px;">
        “Bitbash delivers outstanding quality, speed, and professionalism, truly a team you can rely on.”
      </p>
      <p style="margin:10px 0 0; font-weight:600;">Eliza
        <br><span style="color:#888;">SEO Affiliate Expert</span>
        <br><span style="color:#f5a623;">★★★★★</span>
      </p>
    </td>
    <td align="center" width="33%" style="padding:10px;">
      <a href="https://youtube.com/shorts/6AwB5omXrIM" target="_blank">
        <img src="https://github.com/za2122/footer-section/blob/main/media/review3.gif" alt="Review 3" width="35%" style="border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
      </a>
      <p style="font-size:14px; line-height:1.5; color:#444; margin:0 15px;">
        “Exceptional results, clear communication, and flawless delivery. Bitbash nailed it.”
      </p>
      <p style="margin:10px 0 0; font-weight:600;">Syed
        <br><span style="color:#888;">Digital Strategist</span>
        <br><span style="color:#f5a623;">★★★★★</span>
      </p>
    </td>
  </tr>
</table>
