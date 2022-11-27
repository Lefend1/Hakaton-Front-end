import $api from "../axios";

export default class MainService {
    static async getAllTop(time) {
        try {
            return $api.get("/api/top", {
                params: {
                    by: time,
                },
            });
        } catch (e) {
            console.log(e);
        }
    }
    static async getInfoTag(tag) {
        try {
            return $api.get("/api/info", {
                params: {
                    tag: tag,
                },
            });
        } catch (e) {
            console.log(e);
        }
    }
    static async getInfoVacancies(tag) {
        try {
            return $api.get("/api/vacancy", {
                params: {
                    tag: tag,
                },
            });
        } catch (e) {
            console.log(e);
        }
    }

    static async getAverageVacancy(tag) {
        try {
            return $api.get("/api/vacancy/average", {
                params: {
                    tag: tag,
                },
            });
        } catch (e) {
            console.log(e);
        }
    }

    static async getPost(tag) {
        try {
            return $api.get("/api/news", {
                params: {
                    tag: tag,
                },
            });
        } catch (e) {
            console.log(e);
        }
    }
}