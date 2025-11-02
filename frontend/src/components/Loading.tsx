const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center py-10">
            <div className="w-12 h-12 border-4 border-t-black border-gray-500 rounded-full animate-spin mb-4"></div>
            <p className="text-lg font-medium opacity-90">Loading</p>
        </div>
    );
};

export default Loading;
