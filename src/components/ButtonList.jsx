
export default function ButtonList({ languages, setItem, selected }) {

    function handleClick(language) {
        setItem(language)
    }


    return (
        <div className="button-list">
            {languages.map(language => (
                <button
                    key={language.id}
                    className={'btn btn-primary my-4'}
                    onClick={() => handleClick(language)}

                >
                    {language.title}
                </button>
            ))}
        </div>
    );
}
