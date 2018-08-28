#react+koa+mongodb+redis 个人技术博客
##说明:
+   借鉴项目:[React-Express-Blog-Demo](https://github.com/Nealyang/React-Express-Blog-Demo),基础比较弱的可以先看下这个项目，说的比较详细，由于比较偏后端，所以前端这块改动的不多，主要是后端的一些改动，后面会依次贴出代码改动以及所遇到的一些问题跟解决方案

##改动基本介绍,相关代码会贴出来并主要说一下:
    前端:
        增加了后台管理评论功能,主要有评论审核,开启审核
        增加了github第三方登录功能
        给文章增加了评论功能,用户可以发表评论以及给评论进行点赞
    后端:
        后端由express改成了koa以及相应的中间件的改变
        加入了token+session认证机制,token由redis负责存储,并加入了token验证中间件跟admin中间件,使用两个json对象来分别存储session值跟创建时间
        数据库这块做了一些字段的改动以及增加了评论点赞表跟评论表
        增加了单元测试以及代码风格检查