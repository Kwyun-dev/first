<template>
    <div id="listPage">
        <h2>目录 <span>( {{catalog.length}} )</span> </h2>
        <div class="bordertext">目录 ( {{catalog.length}}) </div>
        <div class="catalog-list">
            <ul>
                <li v-for="(item, key) in catalog" v-if="key < count">
                    <a href="javascript:;" @click="gotoChapter(key)">
                        <h3>{{item.title}}</h3>
                        <div class="content">{{item.content}}</div>
                        <div class="msg">
                            <div class="left-part">
                                {{item.date}}
                            </div>
                            <div class="right-part">
                                阅读 {{item.read}} &nbsp;&nbsp;
                                讨论 {{item.discuss.length}}
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="see-more" id="visibleBtn">
            <a href="javascript:;" @click="changeLimit">点击加载更多</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            catalog: '',
            count: 2,
        }
    },
    methods: {
        changeLimit() {
            this.count ++;
            if(this.count >= this.catalog.length) {
                var tag = document.getElementById("visibleBtn");
                tag.style.display = "none"
            }
        },
        gotoChapter(index) {
            console.log(index)
            this.$router.push({name: "chapter-page", params: {index: index}})
        }
    },
    mounted() {
        this.catalog = this.$store.getters.getCatalog;
    },
}
</script>

<style scoped>
    .bordertext {
        background-color: #ebf0f2;
        padding: 8px;
        line-height: 1;
        font-size: 13px;
        font-weight: bold;
    }
    .catalog-list {
        width: 70%;
        margin: 0 auto;
    }
    .catalog-list h3 {
        font-size: 16px;
        font-weight: bold;
    }
    .catalog-list ul li {
        border-bottom: 1px solid lightgray;
        padding: 10px;
        width: 100%;
        transition: background-color 1s ease;
    }
    .catalog-list ul li .content {
        height: 40px;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-wrap: break-word;
        word-break: break-all;
    }
    .catalog-list ul li:hover {
        background-color: lightgray;
    }
    .catalog-list .msg {
        color: gray;
    }

    .see-more {
        text-align: center;
        margin: 15px;
        font-size: 13px;
    }
    .see-more a {
        color: #389eac;
    }

    .left-part {
        float: left;
    }
    .right-part {
        float: right;
    }
</style>