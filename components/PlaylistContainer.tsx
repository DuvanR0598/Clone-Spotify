interface PlaylistContainerProps {
    name: string;
}

import { PlaylistCard } from "./PlaylistCard";

const PlaylistContainer = ({name}: PlaylistContainerProps) =>{
    return (
        <section className="flex flex-col gap-5">
            <div className="flex justify-between">
                <span className="text-white text-2xl font-bold">{name}</span>
                <span>Show all</span>
            </div>
            <div className="flex">
             <PlaylistCard image="/images/tth.jpeg" tittle="Today´s top hits" description="Jung kook is on too of the Hottest 50!"/>  
            </div>
        </section>
    );
};

export { PlaylistContainer };