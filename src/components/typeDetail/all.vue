<template>
    <div id="allType">
        <h1>综合排行</h1>
        <div class="fixed-position">
            <div v-for="item in datalist" class="all-list">
                <h2>{{ item.name }}</h2>
                <ul>
                    <li v-for="(item1, key) in item.data" class="single-type">
                        <a href="javascript:;" @click="gotoBook(item1)"> 
                            <div class="number">{{key+1}}</div>
                            <div class="brief-mess">
                                <div class="title"> {{ item1.book_name }} </div>
                                <div class="author"> {{ item1.author}} </div>
                            </div>
                            <div class="icon"><img src="../../assets/logo.png" alt="#"></div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            datalist: ''
        }
    },
    methods: {
        gotoBook(item) {
            this.$store.dispatch('setMess', item);
            this.$router.push({name: "detail-page"});
        }
    },
    mounted() {
        this.$axios.get('http://localhost:8899/getBookMes').then((res) => {
            this.datalist = res.data.data
        })
    },
}
</script>
<style scoped>
    #allType {
        width: 100%;
    }

    .fixed-position {
        display: flex;
        align-items: flex-start;
    }

    .all-list {
        display: inline-block;
        margin: 5px 20px;
        padding: 5px 10px;
        width: 25%;
    }
    .all-list h2 {
        color: #bb996d;
        font-size: 18px;
        line-height: 22px;
    }

    .single-type a {
        display: flex;
        align-items: flex-start;
    }
    .single-type div {
        display: inline-block;
    }
    .single-type .number {
        color: #f9c300;
        font-weight: bold;
        font-size: 14px;
        line-height: 19px;
    }
    .single-type .brief-mess {
        margin: 0 20px 0 5px;
    }
    .single-type .brief-mess .title {
        font-size: 15px;
        display: block;
        width: 160px;
        margin-bottom: 20px;
    }
    .single-type .brief-mess .author {
        font-size: 12px;
        color: gray;
        display: block;
        position: relative;
    }
    .single-type .icon img {
        width: 80px;
        height: 200px;
    }
    /* .single-type .number {
        color: #fa595f;
    } */
</style>