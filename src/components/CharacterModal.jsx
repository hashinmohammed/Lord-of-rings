import { imgURL } from "../utils/utils";

const CharacterModal = ({ character, onClose }) => {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const characterProperties = [
    { label: 'Race', value: character?.race },
    { label: 'Gender', value: character?.gender },
    { label: 'Birth', value: character?.birth },
    { label: 'Death', value: character?.death },
    { label: 'Spouse', value: character?.spouse },
    { label: 'URL', value: character?.wikiUrl, isLink: true },
  ];

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-20 shadow-md"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-8 w-full sm:w-2/4">
        <div className="flex flex-col sm:flex-row">
          <div className="bg-white p-8 max-w-md">
            <h2 className="text-2xl font-bold mb-4">{character.name}</h2>
            {characterProperties.map((property, index) => (
              <p key={index} className="mb-4">
                {property.label}: {property.isLink ? (
                  <a href={property.value}>{property.value}</a>
                ) : (
                  property.value
                )}
              </p>
            ))}
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
              onClick={onClose}
            >
              Close
            </button>
          </div>
          <div className="w-full sm:w-96">
            <img
              className="w-full"
              src={imgURL}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;
