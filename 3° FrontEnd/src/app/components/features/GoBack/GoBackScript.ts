import { PropType } from "vue";

const gameListComponent: any = {
  name: "GameListComponent",
  data() {
    return {};
  },
  props: {
    gChoice: Function as PropType<(game: any) => void>
  },
  methods: {
    goBack() {
      if (this.$router.options.history.state.back == null) {
        this.$router.push("/")
      }
      else {
        const pagePath = this.$router.options.history.state.back.split('/')
        if (pagePath[1] == 'singleGame' && this.$route.name != 'singleUser'){
          this.gChoice(pagePath[2])
        }
        this.$router.back()
      }
    },
    goBackHome() {
      this.$router.push("/")
    }
  },
  mounted() {
    
  },
};

export default gameListComponent;
