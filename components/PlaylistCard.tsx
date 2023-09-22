interface PlaylistCardProps {
    tittle: string;
    description: string;
    image: string;
}

const PlaylistCard = ({tittle, description, image}: PlaylistCardProps) => {
    return (
        <div className=" w-[192px] bg-spotify-light-black-2 flex flex-col p-3 rounded-md gap-2 hover:bg-dark-gray-2 hover:cursor-pointer">
            <img className="rounded-md" 
            src={image}
            height={160} 
            width={160} 
            alt="Playlist Image" />

            <span className="font-semibold text-white text-lg">{tittle}</span>
            <span className="text-mid-gray">{description}</span>
        </div>
    );
};

export { PlaylistCard };