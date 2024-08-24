export default function errorTest(req, res) {
    let data = [];
    for (let i = 0; i < 100; i++) {
        data.push(`Iteration ${i}`)
    }
    res.status(200).json({
        message: "Testing Error"
    })
}