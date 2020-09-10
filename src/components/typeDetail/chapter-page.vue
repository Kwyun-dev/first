<template>
    <div id="chapterPage">
        <h1 class="chapter-title">{{title}}</h1>
        <div class="chapter-msg">
            <span class="author">{{author}}</span>
            <span class="date">{{date}}</span>
        </div>
        <div class="chapter-content">{{content}}</div>

        <div>
            <button class="chapter-back">上一篇</button>
            <button class="chapter-forward">下一篇</button>
        </div>

        <!-- <div class="bordertext-chap">专栏信息</div> -->
        <div class="bordertext-chap">讨论</div>
        <div class="chapter-comment">
            <ul>
                <li v-for="item in chapComList">
                    <div class="msg">
                        <div><img src="" alt="#"></div>
                        <div></div>
                    </div>
                    <div class="comment">{{item.comment}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            author: '',
            date: '',
            content: '',
            chapComList: '',
        }
    },
    methods: {
        
    },
    mounted() {
        var that = this;
        this.$axios.get('/api2').then((res) => {
            var result = res.data.data[0];
            var result2 = result.catalog;
            that.title = result2[0].title;
            that.author = result.author;
            that.date = result2[0].date;
            that.content = result2[0].content;
            that.chapComList = result2[0].discuss;
            console.log(that.content)
        })
    },
}
</script>

<style scoped>
    #chapterPage {
        width: 80%;
        margin: 0 auto;
    }
    .chapter-msg {
        height: 16px;
        margin-top: 5px;
        font-size: 12px;
    }
    .author {
        float: left;
    }

    .chapter-content {
        height: auto;
        width: 100%;
        /* white-space: pre; */
        overflow: hidden;
        word-wrap: break-word;
        word-break: break-all;
        line-height: 35px;
    }
</style>