import Axios from "axios";

export class AparatService {
    readApi() {
        return Axios.get("https://www.aparat.com/etc/api/mostviewedvideos")
    }
}
