<template>
    <div id="detailPage">
        <div>
            <h1>{{bookName}}</h1>
            <div>
                <img src="" alt="#">
                {{author}}
            </div>
            <div v-if="true">
                <span></span>
                签约作品
            </div>
            <div class="evaluate"></div>
            <div class="tag">
                <div class="main-tag">
                    <ul>
                        <li>悬疑小说</li>
                    </ul>
                </div>
                <div class="sub-tag">
                    <ul>
                        <!-- <li v-for="item in list">
                            {{item}}
                        </li> -->
                    </ul>
                </div>
            </div>
            <div class="book-msg">
                <ul>
                    <li v-for="(item, key) in bookMsg">
                        <div> {{key}} </div>
                        <div> {{item}} </div>
                    </li>
                </ul>
            </div>
            <div class="bordertext">简介</div>
            <div>
                <p>{{briefIntro}}</p>
            </div>
            <div class="bordertext">
                <div class="left-part">目录（ {{catalog.length}} ）</div>
                <div class="right-part">
                    <input type="checkbox" id="newToFirst">
                    <label for="newToFirst">最新发表在前</label>
                    <input type="checkbox" id="showBrifIntro">
                    <label for="showBrifIntro">显示简介</label>
                </div>
            </div>
            <div class="catalog-list">
                <div class="newest-post"></div>
                <ul>
                    <li v-for="(item, key) in catalog" v-if="key < 5">
                        <header> {{item.title}} </header>
                        <p class="brif"> {{item.content}} </p>
                        <div>
                            <div class="date">{{item.date}}</div>
                            <div class="other">
                                <span>阅读 {{item.read}}</span>
                                <span>讨论 {{item.discuss}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
                <div>
                    <a href="">查看全部目录</a>
                </div>
            </div>
            <div class="bordertext">
                <div class="left-part">评论（ {{bookDiscuss.count}} ）</div>
            </div>
            <div class="comment-list">
                <ul>
                    <li v-for="item in bookDiscuss">
                        <div class="writter-msg">
                            <img src="" alt="#">
                            <div class="writter-name">{{item.reader_name}}</div>
                            <div class="writter-date">{{item.reader_date}}</div>
                        </div>
                        <div class="writter-com">
                            {{item.reader_content}}
                        </div>
                        <div class="writter-options">
                            <button>写回复</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="bordertext">
                <div class="left-part">喜欢这本书的人也喜欢</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bookName: '',
            author: '',
            bookMsg: '',
            briefIntro: '',
            catalog: [],
            bookDiscuss: '',
        }
    },
    methods: {
        
    },
    created() {
        this.$axios.get('/api2').then((res) => {
            var result = res.data.data[0];
            var result = res.data.data[0];
            this.$store.dispatch('setMess', result);
            
            this.bookName = this.$store.getters.getName;
            this.author = this.$store.getters.getAuthor;
            this.bookMsg = this.$store.getters.getBookMsg;
            this.briefIntro = this.$store.getters.getBriefIntro;
            this.catalog = this.$store.getters.getCatalog;
            this.bookDiscuss = this.$store.getters.getBookDiscuss;
        })
    },
}
</script>