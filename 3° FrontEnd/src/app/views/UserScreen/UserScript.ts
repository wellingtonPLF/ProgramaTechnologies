import userService from "../../shared/services/userService";
import { AUTH_INITIAL_STATE } from "../../shared/vuex/reducer/authReducer";
import GoBackComponent from "./../../components/features/GoBack/GoBackComponent.vue";

const userComponent: any = {
  name: "UserComponent",
  components: { GoBackComponent },
  data() {
    return {
      users: [
        AUTH_INITIAL_STATE,
        AUTH_INITIAL_STATE,
        AUTH_INITIAL_STATE
      ] as any[],
      imgType: {
        male: "https://cdn-uploads.gameblog.fr/img/news/429382_649d8426db22f.jpg",
        female: "https://cdn-uploads.gameblog.fr/img/news/427671_6482d11be2082.jpg"
      }
    };
  },
  mounted() {
    userService.listAll().then(
      (it: any) => {
        this.users = it
        console.log(it[0])
      }
    ).catch((error) => {
      console.error(error);
    });      
  },
};

export default userComponent;
