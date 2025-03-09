
interface Props {
    api: string;
}
interface PostProps {
    userName: string,
    image: string
}
export const getMockPostData = ({ api }: Props): Promise<PostProps[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                const result = await fetch(api);
                const response: PostProps[] = await result.json();
                resolve(response);
            } catch (error) {
                console.log("Failed to fetch data: ", error);
                reject(error);
            }
        }, 1000)
    })
}

