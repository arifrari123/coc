export default async function handler(req, res) {
    const { tag, type } = req.query;

    if (!tag || !type) {
        return res.status(400).json({ error: 'Tag এবং type প্রয়োজন' });
    }

    try {
        const API_BASE = 'https://api.clashofclans.com/v1';
        const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMzMThmLTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjAxMjkwZTFkLWRiYTUtNGIyMS1iNzcwLWQyMDdjZWNjY2QyNSIsImlhdCI6MTc3MTE0MTU4NSwic3ViIjoiZGV2ZWxvcGVyLzE5YWUzZWFkLTdlZGEtMTdjZi0yM2YyLWU3MDA0NDIyNDU0MSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4MC4xNDkuMjM0LjEwMyJdLCJ0eXBlIjoiY2xpZW50In1dfQ.BKJ154ynEXyouFW3PFfyDwVfvjRFCxdVeagJvSqPJgd8JknSuxu5W6TvmgVv-QkOQBgEDzbzuYlAo0kyNgnQkg';

        let endpoint = '';
        const cleanTag = tag.replace('#', '');

        switch(type) {
            case 'player':
                endpoint = `/players/%23${cleanTag}`;
                break;
            case 'clan':
                endpoint = `/clans/%23${cleanTag}`;
                break;
            case 'clanMembers':
                endpoint = `/clans/%23${cleanTag}/members`;
                break;
            case 'currentWar':
                endpoint = `/clans/%23${cleanTag}/currentwar`;
                break;
            case 'warLog':
                endpoint = `/clans/%23${cleanTag}/warlog`;
                break;
            default:
                return res.status(400).json({ error: 'অবৈধ type' });
        }

        const response = await fetch(API_BASE + endpoint, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Accept': 'application/json'
            }
        });

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        // CORS হেডার সেট করুন
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
        res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: 'সার্ভার ত্রুটি: ' + error.message });
    }
}
