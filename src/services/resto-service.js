export default class RestoService {
    url = 'http://localhost:3000/menu';

    getResource = async () => {
        const res = await  fetch(this.url);

        if (!res.ok) {
            throw new Error('Server Error');
        }

        return await res.json();
    }
    async getMenuItems () {
        return await  this.getResource(`/menu/`);
    }
}