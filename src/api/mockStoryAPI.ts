
interface Props {
    api: string;
}

interface Story {
    images: string[];
    userName: string;
}
export const getMockStoryThumbnailData = ({ api }: Props): Promise<string[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                const data = await fetch(api);
                const response: Story[] = await data.json();
                resolve(response.map(val => val.images[0]));
            } catch (error) {
                console.log("Failed to fetch data: ", error);
                reject(error);
            }
        }, 1000)
    })
}
export const getMockStoryData = ({ api }: Props): Promise<Story[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                const data = await fetch(api);
                const response: Story[] = await data.json();
                resolve(response);
            } catch (error) {
                console.log("Failed to fetch data: ", error);
                reject(error);
            }
        }, 1000)
    })
}

