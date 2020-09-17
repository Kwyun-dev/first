<template>
    <div id="chapterPage">
        <h1 class="chapter-title">{{title}}</h1>
        <div class="chapter-msg">
            <span class="author">{{author}}</span>
            <span class="date">{{date}}</span>
        </div>
        <div class="chapter-content">{{content}}</div>

        <div class="turn-page">
            <span @click="jump('back')" class="chapter-back" id="back">{{prev}}</span>
            <span @click="jump('next')" class="chapter-next" id="next">{{next}}</span>
        </div>

        <!-- <div class="bordertext-chap">专栏信息</div> -->
        <div class="bordertext-chap">讨论({{chapComList.length}})</div>
        <div class="chapter-comment">
            <ul>
                <li v-for="item in chapComList">
                    <div class="msg">
                        <div class="writter-name">{{item.name}}</div>
                        <div class="writter-date">{{item.date}}</div>
                    </div>
                    <div class="comment">{{item.content}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: '',
            title: '',
            author: '',
            date: '',
            content: '',
            chapComList: '',
            read: '',
            prev: '上一篇：',
            next: '下一篇：',
        }
    },
    methods: {
        jump(type) {
            if(type == "back") {
                // this.$router.push({name: "chapter-page", params: {index: this.index - 1}})
                this.changeChapter(this.index - 1)
            }else if(type == "next") {
                // this.$router.push({name: "chapter-page", params: {index: this.index + 1}})
                this.changeChapter(this.index + 1)
            }
        },
        changeChapter(index2) {
            this.index = index2;
            var tag = this.$store.getters.getCatalog;
            var tar = tag[this.index];
            this.title = tar.title;
            this.author = this.$store.getters.getAuthor;
            this.date = tar.date;
            this.content = tar.content;
            this.chapComList = tar.discuss;
            this.read = tar.read;
            console.log(this.index)

            let t1 = document.getElementById('back');
            let t2 = document.getElementById('next');
            if(this.index <= 0) {
                t1.style.display = "none";
                t2.style.display = "inline-block"
                this.next += tag[this.index + 1].title;
            }else if(this.index >= tag.length) {
                t1.style.display = "inline-block";
                t2.style.display = "none";
                this.prev += tag[this.index - 1].title;
            }else {
                this.next += tag[this.index + 1].title;
                this.prev += tag[this.index - 1].title;
            }
        }
    },
    mounted() {
        this.index = this.$route.params.index;
        var tag = this.$store.getters.getCatalog;
        var tar = tag[this.index];
        this.title = tar.title;
        this.author = this.$store.getters.getAuthor;
        this.date = tar.date;
        this.content = tar.content;
        this.chapComList = tar.discuss;
        this.read = tar.read;
        console.log(this.chapComList)

        if(this.index <= 0) {
            let t1 = document.getElementById('back');
            t1.style.display = "none";
            this.next += tag[this.index + 1].title;
        }else if(this.index >= tag.length) {
            let t1 = document.getElementById('next');
            t1.style.display = "none";
            this.prev += tag[this.index - 1].title;
        }else {
            this.next += tag[this.index + 1].title;
            this.prev += tag[this.index - 1].title;
        }
    },
}
</script>

<style scoped>
    #chapterPage {
        width: 70%;
        margin: 0 auto;
    }
    .chapter-msg {
        height: 16px;
        margin-top: 5px;
        font-size: 12px;
        color: gray;
        line-height: 16px;

    }
    .chapter-msg .author {
        color: #389eac;
        display: inline-block;
        margin-right: 10px;
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

    .turn-page {
        width: 100%;
        text-align: center;
        overflow: hidden;
    }
    .turn-page span {
        width: 40%;
        display: inline-block;
        box-sizing: content-box;
        border: 1px solid lightgray;
        border-radius: 5px;
        padding: 10px 15px;
        cursor: pointer;
        transition: background-color 1s ease;
        font-size: 13px;
    }
    .turn-page span:hover {
        background-color: #389eac;
        color: #fff;
    }
    .turn-page .chapter-back {
        text-align: left;
    }
    .turn-page .chapter-next {
        text-align: right;
    }

    .bordertext-chap {
        background-color: #ebf0f2;
        color: #abc6cf;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        padding: 0 13px;
        margin: 10px 0;
    }
    .chapter-comment ul li {
        border-bottom: 1px solid lightgray;
        line-height: 40px;
        padding: 5px 20px;
        width: 100%;
    }
    .chapter-comment .msg div {
        display: inline;
        margin-right: 10px;
    }
    .chapter-comment .msg .writter-date {
        font-size: 12px;
        color: gray;
    }
</style>