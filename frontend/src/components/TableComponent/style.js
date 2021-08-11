import styled from 'styled-components'

export const Container = styled.main`
    .react-bootstrap-table {
        font-size: 1rem;
    }
`

export const TableWrapper = styled.div`
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
`

export const Content = styled.div`
    max-width: 1120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin: 0 auto;
    padding: 20px 0;

    .bootstrap-table-wrapper {
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
    }

    .react-bootstrap-table {
        @media (max-width: 1360px) {
            font-size: 10px;
        }
    }

    .header-word-wrap {
        word-wrap: break-word;
        vertical-align: initial;
    }

    .home-wrapper {
        max-width: 500px;
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        @media (max-width: 768px) {
            padding: 20px;
        }

        & span {
            color: var(--red);
            font-weight: bold;
            filter: opacity(0.8);
        }

        & p {
            margin: 20px 0;
        }
    }
`
