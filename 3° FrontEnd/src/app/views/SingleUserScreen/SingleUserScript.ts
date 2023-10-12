import ProfileComponent from "../../components/_main/Profile/ProfileComponent.vue";
import userService from "../../shared/services/userService";
import { AUTH_INITIAL_STATE } from "../../shared/vuex/reducer/authReducer";

const singleUserComponent: any = {
  name: "SingleUserComponent",
  components: {
    ProfileComponent
  },
  data() {
    return {
      user: AUTH_INITIAL_STATE
    }
  },
  methods: {
    setUser(id: number) {
      userService.getUser(id).then(
        it => {
          this.user = it;
        }
      ).catch((error) => {
        console.log(error)
      })
    }
  },
  beforeMount() {
    this.setUser(this.$route.params.id)
  }
};

export default singleUserComponent;
