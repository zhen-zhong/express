import express from 'express';


const router = express.Router();

// 示例业务接口
router.get('/test', (req, res) => {
    // 这里是业务逻辑代码，比如查询数据库
    res.send('test');
});

export default router;
