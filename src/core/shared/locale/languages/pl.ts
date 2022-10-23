import { LOCALE_KEYS } from './keys';

/**
 * Locales are written with a key and value type.
 * When you get the key of 'greet-user' from the LocaleController
 * It will return a string of 'Hello someVariableYouPass, welcome to the server.'
 * It's a simple way to create locales without hurting performance too much.
 */
export default {
	// Commands
	[LOCALE_KEYS.COMMAND_ADMIN_CHAT]: `_%_ [wiadomość] - Rozmawiaj z gronem administracji`,
	[LOCALE_KEYS.COMMAND_ACCEPT_DEATH]: `_%_ - Odrodź się w szpitalu po śmierci`,
	[LOCALE_KEYS.COMMAND_ACTION_MENU]: `_%_ - Stwórz testowe menu akcji`,
	[LOCALE_KEYS.COMMAND_ADD_VEHICLE]: `_%_ [model] - Dodaj pojazd do gracza`,
	[LOCALE_KEYS.COMMAND_ADD_WHITELIST]: `_%_ [discord] - Dodaj gracza na white-liste discord przez discord-id`,
	[LOCALE_KEYS.COMMAND_OOC]: `_%_ [wiadomość] - Rozmawiaj poza charakterem`,
	[LOCALE_KEYS.COMMAND_BROADCAST]: `_%_ [wiadomość] - Ogłoszenie globalne`,
	[LOCALE_KEYS.COMMAND_COORDS]: `_%_ [x] [y] [z] - Teleport do podanych koordynatów`,
	[LOCALE_KEYS.COMMAND_DO]: `_%_ [wiadomość] - Opisz swoje otoczenie, dźwięki, przedmioty itp.`,
	[LOCALE_KEYS.COMMAND_DUMMY_ITEM]: `_%_ - Otrzymaj testowe przedmioty`,
	[LOCALE_KEYS.COMMAND_GET_ITEM]: `_%_ [nazwa-itemu] [ilość] - Dostań przedmiot przez nazwę`,
	[LOCALE_KEYS.COMMAND_LOW]: `_%_ [wiadomość] - Rozmawiaj cicho`,
	[LOCALE_KEYS.COMMAND_MOD_CHAT]: `_%_ [wiadomość] - Rozmawiaj z adminami oraz moderatorami`,
	[LOCALE_KEYS.COMMAND_ME]: `_%_ [wiadomość] - Opisz akcje roleplay`,
	[LOCALE_KEYS.COMMAND_NO_CLIP]: `_%_ - Włącz no-clip`,
	[LOCALE_KEYS.COMMAND_QUIT_JOB]: `_%_ - Opuść pracę`,
	[LOCALE_KEYS.COMMAND_REMOVE_ALL_WEAPONS]: `_%_ - Usuń wszystkie bronie`,
	[LOCALE_KEYS.COMMAND_REMOVE_WHITELIST]: `_%_ [discord] - Usuń discord id z White-listy`,
	[LOCALE_KEYS.COMMAND_REVIVE]: `_%_ [player_id]* - Ożyw samego siebie lub kogoś innego`,
	[LOCALE_KEYS.COMMAND_SEATBELT]: `_%_ - Zapnij pas lub załóż kask`,
	[LOCALE_KEYS.COMMAND_SET_ARMOUR]: `_%_ [0-100][player_id]* - Ustaw pancerze sobie lub komuś innemu`,
	[LOCALE_KEYS.COMMAND_SET_CASH]: `_%_ [value] - Dostań pieniądze do ręki`,
	[LOCALE_KEYS.COMMAND_SET_FOOD]: `_%_ [0-100] - Ustaw poziom głodu`,
	[LOCALE_KEYS.COMMAND_SET_HEALTH]: `_%_ [99-199][player_id]* - Ustaw poziom zdrowia sobie lub komuś innemu`,
	[LOCALE_KEYS.COMMAND_SET_WATER]: `_%_ [0-100] - Ustaw poziom nawodnienia`,
	[LOCALE_KEYS.COMMAND_SPAWN_VEHICLE]: `_%_ [index] - Przywołaj swój pojazd przez index`,
	[LOCALE_KEYS.COMMAND_TELEPORTER]: `_%_ - Teleportuj się z powrotem do aktualnej lokalizacji z przedmiotem`,
	[LOCALE_KEYS.COMMAND_TELEPORT_WAYPOINT]: `_%_ - Teleportuj się do punktu orientacyjnego. Najpierw utwórz punkt orientacyjny na mapie`,
	[LOCALE_KEYS.COMMAND_TOGGLE_VEH_LOCK]: `_%_ - Zarządzaj zamknięciem pojazdu`,
	[LOCALE_KEYS.COMMAND_TOGGLE_VEH_DOOR]: `_%_ - [0-5] - Zarządzaj drzwiami pojazdu`,
	[LOCALE_KEYS.COMMAND_GIVE_VEH_KEY]: `_%_ [id] - Daj komuś klucze do auta`,
	[LOCALE_KEYS.COMMAND_TOGGLE_ENGINE]: `_%_ - Zmień stan silnika`,
	[LOCALE_KEYS.COMMAND_VEHICLE]: `_%_ [model] - Stwórz pojazd administracyjny`,
	[LOCALE_KEYS.COMMAND_WANTED]: `_%_ [player_id] [gwiazdki] - Ustaw poziom poszukiwania`,
	[LOCALE_KEYS.COMMAND_WHISPER]: `_%_ [player_id][wiadomość] - Prywatna wiadomość do najbliższego gracza`,
	[LOCALE_KEYS.COMMAND_WEAPON]: `_%_ [name] - Otrzymaj broń poprzez nazwę`,
	[LOCALE_KEYS.COMMAND_CLEAR_INVENTORY]: `_%_ - Wyczyść swój inwentarz`,
	[LOCALE_KEYS.COMMAND_CLEAR_TOOLBAR]: `_%_ - Wyczyść swój pasek narzędzi`,
	[LOCALE_KEYS.COMMAND_CLEAR_EQUIPMENT]: `_%_ - Wyczyść swój ekwipunek`,
	[LOCALE_KEYS.COMMAND_NOT_PERMITTED_CHARACTER]: `Komenda jest niedozwolona dla twojej postaci.`,
	[LOCALE_KEYS.COMMAND_NOT_PERMITTED_ADMIN]: `Komenda jest niedozwolona dla Twojego konta.`,
	[LOCALE_KEYS.COMMAND_NOT_VALID]: `_%_ nie jest prawidłową komendą.`,
	[LOCALE_KEYS.COMMAND_SET_WEATHER]: `_%_ [nazwa pogody] - Ustawienie danej pogody w regionie`,
	[LOCALE_KEYS.COMMAND_CLEAR_WEATHER]: `_%_ - Wyłącz ustawienie pogody`,
	[LOCALE_KEYS.COMMAND_SET_TIME]: `_%_ [hour] - Ustaw czas`,
	[LOCALE_KEYS.COMMAND_CLEAR_TIME]: `_%_ - Wyłącz ustawienie czasu`,
	[LOCALE_KEYS.COMMAND_REFILL_VEHICLE]: `_%_ - Uzupełnianie paliwa w pojeździe na mocy administracyjnej`,
	[LOCALE_KEYS.COMMAND_REPAIR_VEHICLE]: `_%_ - Naprawa pojazdu na mocy administracyjnej`,
	[LOCALE_KEYS.COMMAND_TEMP_VEHICLE]: `_%_ [model] - Utwórz pojazd tymczasowy`,
	[LOCALE_KEYS.COMMAND_SET_VEHICLE_HANDLING]: `_%_ [wartość] - Ustawia wartość handlingu pojazdu`,
	[LOCALE_KEYS.COMMAND_SET_VEHICLE_LIVERY]: `_%_ [numer] - Ustawia wyposażenie pojazdu`,
	[LOCALE_KEYS.COMMAND_SESSION_VEHICLE]: `_%_ [model] - Stworzenie pojazdu sesyjnego`,
	[LOCALE_KEYS.COMMAND_TOGGLE_VEH_NEON_LIGHTS]: `_%_ - Przełączenie neonów samochodowych`,
	[LOCALE_KEYS.COMMAND_SET_VEH_NEON_LIGHTS]: `_%_ [<] [>] [ᐱ] [V] - Ustawienie neonów samochodowych`,
	[LOCALE_KEYS.COMMAND_FULL_TUNE_VEHICLE]: `_%_ - Pełny tuning pojazdu`,
	[LOCALE_KEYS.COMMAND_ADD_VEHICLE_KEY]: `_%_ - Dodaj klucz do pojazdu`,
	[LOCALE_KEYS.COMMAND_SET_VEH_DIRT_LEVEL]: `_%_ [poziom] - Ustawia poziom zabrudzenia pojazdu`,
	// Cannot
	[LOCALE_KEYS.CANNOT_CHAT_WHILE_DEAD]: `Nie można rozmawiać, gdy jest się martwym.`,
	[LOCALE_KEYS.CANNOT_FIND_PLAYER]: `Nie udało się znaleźć tego gracza.`,
	[LOCALE_KEYS.CANNOT_PERFORM_WHILE_DEAD]: `Nie można wykonać tej komendy, gdy jesteś martwy.`,
	[LOCALE_KEYS.CANNOT_FIND_PERSONAL_VEHICLES]: `Nie można znaleźć żadnych pojazdów personalnych.`,
	[LOCALE_KEYS.CANNOT_FIND_THAT_PERSONAL_VEHICLE]: 'Nie można zlokalizować tego osobistego pojazdu.',
	// Clothing
	[LOCALE_KEYS.CLOTHING_ITEM_IN_INVENTORY]: `Element odzieży został dodany do twojego ekwipunku.`,
	// Discord
	[LOCALE_KEYS.DISCORD_ID_NOT_LONG_ENOUGH]: `Discord ID musi mieć co najmniej 18 znaków.`,
	[LOCALE_KEYS.DISCORD_ALREADY_WHITELISTED]: `_%_ jest już na white-liscie.`,
	[LOCALE_KEYS.DISCORD_NOT_WHITELISTED]: `_%_ nie jest na white-liscie.`,
	[LOCALE_KEYS.DISCORD_ADDED_WHITELIST]: `_%_ został dodany do white-listy.`,
	[LOCALE_KEYS.DISCORD_REMOVED_WHITELIST]: `_%_ został usunięty z white-listy.`,
	// FUEL
	[LOCALE_KEYS.FUEL_EXIT_VEHICLE_FIRST]: `Przed tankowaniem należy opuścić pojazd.`,
	[LOCALE_KEYS.FUEL_UPDATE_VEHICLE_FIRST]: `Aby zatankować, trzeba najpierw wejść i wyjść z pojazdu.`,
	[LOCALE_KEYS.FUEL_VEHICLE_NOT_CLOSE]: `Pojazd nie znajduje się wystarczająco dystrybutora`,
	[LOCALE_KEYS.FUEL_ALREADY_FULL]: `Pojazd ma już wystarczającą ilość paliwa.`,
	[LOCALE_KEYS.FUEL_TOO_FAR_FROM_PUMP]: `Pompa znajduje się zbyt daleko od pojazdu.`,
	[LOCALE_KEYS.FUEL_HAS_UNLIMITED]: `Pojazd ma nieograniczoną ilość paliwa. Nie ma potrzeby tankowania..`,
	[LOCALE_KEYS.FUEL_CANNOT_AFFORD]: `Nie stać cię na żadne paliwo.`,
	[LOCALE_KEYS.FUEL_PAYMENT]: `Zapłacisz $_%_ za _%_ jednostek paliwa. Uruchom to menu ponownie, aby anulować tankowanie.`,
	[LOCALE_KEYS.FUEL_PAID]: `Zapłaciłeś $_%_ za _%_ jednostek paliwa.`,
	// House
	[LOCALE_KEYS.INTERIOR_INTERACT]: `Interakcja z Domem`,
	//Translations related to interiors
	[LOCALE_KEYS.INTERIOR_TOO_FAR_FROM_ENTRANCE]: `Za daleko od wejścia.`,
	[LOCALE_KEYS.INTERIOR_TOO_FAR_FROM_EXIT]: `Za daleko od wyjścia.`,
	[LOCALE_KEYS.INTERIOR_NOT_ENOUGH_CURRENCY]: `Niewystarczająca ilość waluty`,
	[LOCALE_KEYS.INTERIOR_DOOR_LOCKED]: `Drzwi są zamknięte`,
	[LOCALE_KEYS.INTERIOR_PURCHASED]: `Zakupiono nieruchomość o id _%_ za $_%_.`,
	[LOCALE_KEYS.INTERIOR_SOLD]: `Sprzedana nieruchomość o id _%_ za $_%_.`,
	[LOCALE_KEYS.INTERIOR_NO_STORAGE]: `Wnętrze nie ma możliwości przechowywania.`,
	// Invalid
	[LOCALE_KEYS.INVALID_VEHICLE_MODEL]: `Model pojazdu nie jest pojazdem.`,
	// Interaction
	[LOCALE_KEYS.INTERACTION_TOO_FAR_AWAY]: `Jesteś zbyt daleko, aby wejść w interakcję. Podejdź bliżej.`,
	[LOCALE_KEYS.INTERACTION_INVALID_OBJECT]: `Ten obiekt nie posiada interakcji.`,
	[LOCALE_KEYS.INTERACTION_INTERACT_WITH_OBJECT]: `Interakcja z obiektem`,
	[LOCALE_KEYS.INTERACTION_INTERACT_VEHICLE]: `Interakcja z pojazdem`,
	[LOCALE_KEYS.INTERACTION_VIEW_OPTIONS]: `Wyświetl opcje`,
	// Item
	[LOCALE_KEYS.ITEM_ARGUMENTS_MISSING]: `Brakuje argumentów.`,
	[LOCALE_KEYS.ITEM_NOT_EQUIPPED]: `Żaden przedmiot nie jest wyposażony w tym slocie`,
	[LOCALE_KEYS.ITEM_DOES_NOT_EXIST]: `_%_ nie istnieje.`,
	[LOCALE_KEYS.ITEM_WAS_ADDED_INVENTORY]: `_%_ został dodany do twojego ekwipunku.`,
	[LOCALE_KEYS.ITEM_WAS_ADDED_EQUIPMENT]: `_%_ został dodany do twojego sprzętu.`,
	[LOCALE_KEYS.ITEM_WAS_ADDED_TOOLBAR]: `_%_ został dodany do paska narzędzi.`,
	[LOCALE_KEYS.ITEM_WAS_DESTROYED_ON_DROP]: `_%_ został zniszczony przy zrzucaniu`,
	// Job
	[LOCALE_KEYS.JOB_ALREADY_WORKING]: `Posiadasz już prace`,
	[LOCALE_KEYS.JOB_NOT_WORKING]: `Obecnie nie pracujesz.`,
	[LOCALE_KEYS.JOB_QUIT]: `Rzuciłeś swoją obecną pracę.`,
	// Labels
	[LOCALE_KEYS.LABEL_ON]: `ON`,
	[LOCALE_KEYS.LABEL_OFF]: `OFF`,
	[LOCALE_KEYS.LABEL_BROADCAST]: `Transmisja`,
	[LOCALE_KEYS.LABEL_ENGINE]: `Silnik`,
	[LOCALE_KEYS.LABEL_HOSPITAL]: `Szpital`,
	[LOCALE_KEYS.LABEL_BANNED]: `[Zbanowany]`,
	// Player
	[LOCALE_KEYS.PLAYER_IS_TOO_FAR]: `Ten zawodnik jest zbyt daleko.`,
	[LOCALE_KEYS.PLAYER_IS_TOO_CLOSE]: `Ten zawodnik jest za blisko.`,
	[LOCALE_KEYS.PLAYER_IS_NOT_DEAD]: `Ten gracz nie jest martwy.`,
	[LOCALE_KEYS.PLAYER_ARMOUR_SET_TO]: `Twój pancerz został ustawiony na: _%_`,
	[LOCALE_KEYS.PLAYER_HEALTH_SET_TO]: `Twój stan zdrowia został ustawiony na: _%_`,
	[LOCALE_KEYS.PLAYER_SEATBELT_ON]: `Zapinasz pasy bezpieczeństwa.`,
	[LOCALE_KEYS.PLAYER_SEATBELT_OFF]: `Zdejmujesz pasy bezpieczeństwa.`,
	[LOCALE_KEYS.PLAYER_RECEIVED_BLANK]: `Otrzymałeś _%_ od _%_.`,
	// Use
	[LOCALE_KEYS.USE_FUEL_PUMP]: 'Użyj pompy paliwa',
	[LOCALE_KEYS.USE_ATM]: 'Użyj bankomatu',
	[LOCALE_KEYS.USE_VENDING_MACHINE]: 'Użyj automatu do sprzedaży',
	[LOCALE_KEYS.USE_CLOTHING_STORE]: 'Przeglądaj odzież',
	// Weapon
	[LOCALE_KEYS.WEAPON_NO_HASH]: `Broń nie ma hashu`,
	// Vehicle
	[LOCALE_KEYS.VEHICLE_NO_FUEL]: `W pojeździe nie ma paliwa.`,
	[LOCALE_KEYS.VEHICLE_LOCK_SET_TO]: `Blokada pojazdu została ustawiona na: _%_`,
	[LOCALE_KEYS.VEHICLE_TOGGLE_LOCK]: `Blokada zamku`,
	[LOCALE_KEYS.VEHICLE_TOGGLE_ENGINE]: `Stan silnika`,
	[LOCALE_KEYS.VEHICLE_IS_LOCKED]: `Najbliższy pojazd jest zamknięty.`,
	[LOCALE_KEYS.VEHICLE_ENTER_VEHICLE]: `Wsiadanie / wysiadanie z pojazdu`,
	[LOCALE_KEYS.VEHICLE_TOO_FAR]: `Pojazd jest za daleko.`,
	[LOCALE_KEYS.VEHICLE_NO_VEHICLES_IN_GARAGE]: `TW tym garażu nie ma żadnych pojazdów.`,
	[LOCALE_KEYS.VEHICLE_NO_PARKING_SPOTS]: `Przy tym garażu nie ma miejsc parkingowych.`,
	[LOCALE_KEYS.VEHICLE_ALREADY_SPAWNED]: `Ten pojazd już się pojawił.`,
	[LOCALE_KEYS.VEHICLE_COUNT_EXCEEDED]: `Możesz mieć tylko _%_ pojazdów spawnowanych w tym samym czasie. Przekroczyłeś limit tarła pojazdów.`,
	[LOCALE_KEYS.VEHICLE_LOCKED]: `Zamknięty`,
	[LOCALE_KEYS.VEHICLE_UNLOCKED]: `Otwart`,
	[LOCALE_KEYS.VEHICLE_FUEL]: `Paliwo`,
	[LOCALE_KEYS.VEHICLE_NO_KEYS]: `Nie posiadasz kluczy do tego pojazdu`,
	[LOCALE_KEYS.VEHICLE_NO_STORAGE]: `Ten pojazd nie ma schowka.`,
	[LOCALE_KEYS.VEHICLE_NO_TRUNK_ACCESS]: `Nie masz dostępu do bagażnika.`,
	[LOCALE_KEYS.VEHICLE_NOT_UNLOCKED]: `Pojazd nie jest obecnie odblokowany.`,
	[LOCALE_KEYS.VEHICLE_NO_OPEN_SEAT]: `Nie udało się znaleźć wolnego miejsca.`,
	[LOCALE_KEYS.VEHICLE_REFUEL_INCOMPLETE]: `Tankowanie pojazdów nie zakończone`,
	[LOCALE_KEYS.VEHICLE_NO_LONGER_NEAR_VEHICLE]: `Nie jesteś już w pobliżu tego pojazdu.`,
	[LOCALE_KEYS.VEHICLE_NOT_RIGHT_SIDE_UP]: `Pojazd nie jest ustawiony prawą stroną do góry.`,
	[LOCALE_KEYS.VEHICLE_IS_ALREADY_BEING_PUSHED]: `Pojazd jest już popychany.`,
	[LOCALE_KEYS.VEHICLE_STORAGE_VIEW_NAME]: `Pojazd - _%_ - Schowek`,
	[LOCALE_KEYS.VEHICLE_KEY_NAME]: `Klucz dla _%_`,
	[LOCALE_KEYS.VEHICLE_KEY_DESCRIPTION]: `Klucz do modelu pojazdu _%_`,
	[LOCALE_KEYS.VEHICLE_MODEL_INVALID]: `Niepoprawny model pojazdu.`,
	[LOCALE_KEYS.VEHICLE_CREATED]: `Stworzono pojazd.`,
	[LOCALE_KEYS.VEHICLE_REFILLED]: `Pojazd zatankowany.`,
	[LOCALE_KEYS.VEHICLE_REPAIRED]: `Pojazd skutecznie naprawiony.`,
	[LOCALE_KEYS.VEHICLE_HAS_NO_MOD_KIT]: `Pojazd nie posiada mod kitu.`,
	[LOCALE_KEYS.VEHICLE_NOT_OWN_BY_YOU]: `Musi być w pojeździe, którego jesteś właścicielem.`,
	[LOCALE_KEYS.VEHICLE_KEY_GIVEN_TO]: `klucz do pojazdu dla`,
	// Faction
	[LOCALE_KEYS.FACTION_PLAYER_IS_ALREADY_IN_FACTION]: `_%_ jest już w jakiejś frakcji lub nie istnieje.`,
	[LOCALE_KEYS.FACTION_CANNOT_CHANGE_OWNERSHIP]: `Nie jesteś w stanie zmienić właściciela frakcji.`,
	[LOCALE_KEYS.FACTION_STORAGE_NOT_ACCESSIBLE]: `Schowek jest Niedostępny`,
	[LOCALE_KEYS.FACTION_STORAGE_NO_ACCESS]: `Nie masz do tego dostępu.`,
	[LOCALE_KEYS.FACTION_ONLY_OWNER_IS_ALLOWED]: `Tylko właściciel może dodać do rangi uprawnienia lub flagę super administratora.`,
	[LOCALE_KEYS.FACTION_UNABLE_TO_DISBAND]: `Nie jesteś w stanie rozwiązać frakcji.`,
	[LOCALE_KEYS.FACTION_NAME_DOESNT_MATCH]: `Przekazana nazwa frakcji nie odpowiada rzeczywistej nazwie frakcji.`,
	[LOCALE_KEYS.FACTION_NOT_THE_OWNER]: `Nie jesteś właścicielem tej frakcji.`,
	[LOCALE_KEYS.FACTION_COULD_NOT_FIND]: `Nie można znaleźć twojej frakcji.`,
	[LOCALE_KEYS.FACTION_DISABNDED]: `Frakcja rozwiązana.`,
	[LOCALE_KEYS.FACTION_BANK_COULD_NOT_WITHDRAW]: `Nie mógł się wycofać $_%_.`,
	[LOCALE_KEYS.FACTION_BANK_COULD_NOT_DEPOSIT]: `Nie można wpłacić $_%_`,
	[LOCALE_KEYS.FACTION_BANK_WITHDREW]: `Wypłacono $_%_`,
	[LOCALE_KEYS.FACTION_PLAYER_QUITTED]: `_%_ opuścił frakcję.`,
	[LOCALE_KEYS.FACTION_COULDNT_QUIT]: `Nie mógł opuścić frakcji, ponieważ jesteś liderem.`,
	// World
	[LOCALE_KEYS.WORLD_TIME_IS]: `Aktualny czas światowy to _%_:_%_`,
	// Storage
	[LOCALE_KEYS.STORAGE_NOT_AVAILABLE]: `Brak możliwości przechowywania`,
	[LOCALE_KEYS.STORAGE_IN_USE]: `Schowek w użyciu`,
	[LOCALE_KEYS.INVENTORY_IS_FULL]: `Zapasy są pełne`,
	// ============================
	// WebView Locales Start Here
	// ============================
	[LOCALE_KEYS.WEBVIEW_JOB]: {
		LABEL_DECLINE: 'Odrzuć',
		LABEL_ACCEPT: 'Zaakceptuj',
	},
	[LOCALE_KEYS.WEBVIEW_STORAGE]: {
		LABEL_SPLIT_TEXT: 'Przenieść stos tej ilości?',
	},
	[LOCALE_KEYS.WEBVIEW_INVENTORY]: {
		ITEM_SLOTS: [
			'Kapelusz',
			'Maski',
			'Koszulki',
			'Spodnie',
			'Stopy',
			'Okulary',
			'Uszy',
			'Plecaki/Torby',
			'Pancerz',
			'Zegarki',
			'Bransoletki',
			'Akcesoria',
		],
		LABEL_SPLIT: 'Podziel',
		LABEL_CANCEL: 'Odrzuć',
		LABEL_DROP_ITEM: 'Upuść przedmiot',
		LABEL_WEIGHT: 'Waga',
		LABEL_SPLIT_TEXT: 'Zrobić stos z tej ilości?',
	},
};