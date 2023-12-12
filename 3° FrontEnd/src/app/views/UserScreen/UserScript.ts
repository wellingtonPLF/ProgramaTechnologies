import { sexualityImg } from "../../shared/enums/sexualityImg";
import userService from "../../shared/services/userService";
import GoBackComponent from "./../../components/features/GoBack/GoBackComponent.vue";
import LoaderComponent from "./../../components/features/Loader/LoaderComponent.vue";

import { useQuery } from "vue-query";

const userComponent: any = {
  name: "UserComponent",
  components: { GoBackComponent, LoaderComponent },
  data() {
    return {
      users: undefined,
      imgType: sexualityImg,
      userNick: { nickname: undefined}
    };
  },
  setup() {
    const { data } = useQuery('users', async () => {
      return await userService.listAll()
    }) 

    return { data }
  },
  methods: {
    searchUser(event) {
      if (event.keyCode === 8) {
        if (this.userNick.nickname == '') {
          this.users = undefined
        }
      }
      if (event.keyCode != 16 && event.keyCode != 36) {
        if (this.userNick.nickname != undefined && this.userNick.nickname != "") {
          try {
            userService.searchUser(this.userNick).then(
              it => {
                this.users = it
              }
            )
          }
          catch(_) {}
        }
      }
    }
  }
};

export default userComponent;
