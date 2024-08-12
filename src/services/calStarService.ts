import { apiService } from "./apiService";


export const calStarService = {
    async getUserData() {
        try {
            const res = await apiService.get('user-data');
            return res.data;
        } catch (error: any) {
            return error;
        }
    }

}
