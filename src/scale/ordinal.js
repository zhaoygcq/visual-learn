import { equal } from "./utils";

export function createOrdinal({ domain, range }) {
    return (x) => {
        const index = domain.findIndex((d) => equal(d, x));
        // 取模的目的是为了应对 domain.length > range.length 的情况
        return range[index % range.length];
    };
}