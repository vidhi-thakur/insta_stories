
interface ThumbnailProps {
    api: string;
}

interface SingleStoryProps {
    api: string;
    id: number;
}

interface Story {
    userName: string,
    images: string[],
    id: number,
    hasMore: boolean,
    hasPrev: boolean,
}
interface StoryThumbnailProps {
    image: string;
    id: number;
}

export const getMockStoryThumbnailData = ({ api }: ThumbnailProps): Promise<StoryThumbnailProps[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                const data = await fetch(api);
                const response: Story[] = await data.json();
                resolve(response.map(val => ({image: val.images[0], id: val.id})));
            } catch (error) {
                console.log("Failed to fetch data: ", error);
                reject(error);
            }
        }, 1000)
    })
}
export const getMockSingleStory = ({ api, id }: SingleStoryProps): Promise<Story> => {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                const data = await fetch(api);
                const response: Story[] = await data.json();
                resolve(response.filter(val => val.id === id)[0]);
            } catch (error) {
                console.log("Failed to fetch data: ", error);
                reject(error);
            }
        }, 1000)
    })
}

