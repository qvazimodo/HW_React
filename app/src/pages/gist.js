import debounce from "lodash.debounce";
import { useCallback, useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
    getGists,
    gistsSelector,
    gistsByNameSelector,
    getGistsByName,
} from "../store/gists";

export function GistsPage() {
    const [search, setSearch] = useState("");

    const dispatch = useDispatch();
    const { gistError, gistPending, gists } = useSelector(gistsSelector);
    const { gistsByName, gistByNameError, gistByNamePending } =
        useSelector(gistsByNameSelector);

    const searchDebounced = useMemo(() => {
        return debounce((query) => dispatch(getGistsByName(query)), 500);
    }, [dispatch]);

    useEffect(() => {
        if (!gists.length) {
            dispatch(getGists());
        }
    }, [dispatch, gists]);

    useEffect(() => {
        if (search) {
            searchDebounced(search);
        }
    }, [searchDebounced, search]);

    if (gistPending) {
        return <h1>Pending ...</h1>;
    }
    if (gistError) {
        return <h1>Error</h1>;
    }

    if (gistByNamePending) {
        return <h1>Pending gistByNamePending...</h1>;
    }
    if (gistByNameError) {
        return (
            <div>
                <h1>Error gistByNameError</h1>
            </div>
        );
    }

    return (
        <div>
            <h1>Gists</h1>
            {gists?.map((gist) => (
                <h2 key={gist.url}>{gist.url}</h2>
            ))}

            <button onClick={() => dispatch(getGists(1))}>1</button>
            <button onClick={() => dispatch(getGists(2))}>2</button>
            <button onClick={() => dispatch(getGists(3))}>3</button>

            <hr />

            <h1>Search</h1>
            <input value={search} onChange={(e) => setSearch(e.target.value)} />
            <hr />

            {gistsByName?.map((gist) => (
                <h2 key={gist.url}>{gist.url}</h2>
            ))}
        </div>
    );
}