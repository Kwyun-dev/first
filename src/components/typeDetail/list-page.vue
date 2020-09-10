<template>
    <div id="listPage">
        <h2>目录 <span>( {{catalog.length}} )</span> </h2>
        <div class="bordertext">目录 ( {{catalog.length}}) </div>
        <div class="catalog-list">
            <ul>
                <li v-for="(item, key) in catalog" v-if="key < count">
                    <h3>{{item.title}}</h3>
                    <p class="content">{{item.content}}</p>
                    <div class="msg">
                        <div class="left-part">
                            {{item.date}}
                        </div>
                        <div class="right-part">
                            阅读 {{item.read}} &nbsp;&nbsp;
                            讨论 {{item.discuss.length}}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="see-more">
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
            this.count += 1;
        }
    },
    mounted() {
        this.$axios.get('/api2').then((res) => {
            var result = res.data.data[0];
            this.catalog = result.catalog;
            console.log(this.catalog)
        })
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
    .catalog-list ul li {
        border-bottom: 1px solid #333;
        padding: 10px;
        width: 100%;
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

    .see-more {
        text-align: center;
        margin-top: 10px;
    }

    .left-part {
        float: left;
    }
    .right-part {
        float: right;
    }
</style>