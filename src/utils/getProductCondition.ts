export function getProductCondition({
	id,
}: {
	id: number;
}) {
	switch (id) {
		case 1:
			return {
				id: 1,
				category: "Première main",
				name: "Neuf sans emballage d'origine",
				description:
					"Article neuf, Jamais porté mais sans emballage d'origine.",
			};
		case 2:
			return {
				id: 2,
				category: "Deuxième main",
				name: "Neuf avec étiquette",
				description:
					"Jamais porté et l'article possède toujours ses étiquettes d'origine.",
			};
		case 3:
			return {
				id: 3,
				category: "Deuxième main",
				name: "Comme neuf",
				description:
					"Jamais porté, ou porté une ou deux fois, sans aucun signe d'usure.",
			};
		case 4:
			return {
				id: 4,
				category: "Deuxième main",
				name: "Très bon état",
				description:
					"Légèrement porté, avec des signes minimes d'usure qui ne sont pas immédiatement visibles.",
			};
		case 5:
			return {
				id: 5,
				category: "Deuxième main",
				name: "Bon état",
				description:
					"Porté avec des signes d'usure visibles, mais toujours en bon état.",
			};
		case 6:
			return {
				id: 6,
				category: "Deuxième main",
				name: "Correct",
				description:
					"Porté avec des signes d'usure évidents, y compris quelques défauts comme de petites taches ou de légers accrocs",
			};
		default:
			return {
				id: 0,
				category: "Première main",
				name: "Tout neuf",
				description:
					"Article tout neuf, jamais porté, dans son emballage d'origine.",
			};
	}
}
