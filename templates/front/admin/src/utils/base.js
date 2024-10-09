const base = {
    get() {
        return {
            url : "http://localhost:8080/django32vp9eu2/",
            name: "django32vp9eu2",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Python的智能停车管理系统的设计与实现"
        } 
    }
}
export default base
