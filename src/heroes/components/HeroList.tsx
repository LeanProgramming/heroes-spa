import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";

interface IHeroList {
    publisher: string;
}

export const HeroList = ({ publisher }: IHeroList) => {

    const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="row row-cols-1 row-cols-md-3 g-3">
            {
                heroes.map((heroe) => (
                    <HeroCard key={ heroe.id} {...heroe}/>
                ))
            }
        </div>
    )
}
