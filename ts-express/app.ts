import * as express from "express";
import * as bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req: express.Request, res: express.Response) => res.send('Hello world'))

app.post('/signin', (req: express.Request, res: express.Response) => {
    const { username, password } = req.body;
    res.send({ username, password });
})
app.use(express.static('public'))

app.listen(3000, () => console.log('Example app listening on port 3000'))