import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    background: var(--white);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo-wrapper {
        display: flex;
        align-items: center;
        width: 200px;
        justify-content: space-around;

        & span {
            color: var(--red);
            font-weight: bold;
            filter: opacity(0.8);
            font-size: 1.2rem;
        }
    }

    .registries-btn {
        font-size: 1rem;
        color: #fff;
        background: var(--text-title);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`
