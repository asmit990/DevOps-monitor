app.get('/slow', async (req, res) => {
const end = httpRequestDuration.startTimer({ method: 'GET', route: '/slow' });
await new Promise(r => setTimeout(r, 800));
end({ code: 200 });
res.json({ slow: true });
});


app.get('/metrics', async (req, res) => {
res.set('Content-Type', register.contentType);
res.end(await register.metrics());
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API on :${port}`));