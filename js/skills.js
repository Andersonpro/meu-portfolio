const skillsBars = document.querySelectorAll('[data-skills]');

skillsBars.forEach((elemento) => {
    var skill = elemento.dataset.skills;
    var skillName = elemento.querySelector('p');
    var bar = elemento.querySelector('div');

    switch (skill) {
        case 'html5':
            var porcentagem = '90%';
            skillName.innerText += `: ${porcentagem}`;
            bar.style = `background-image: linear-gradient(to right, var(--blue-color) ${porcentagem}, var(--second-bg-color) ${porcentagem});`;
            break;
        case 'CSS3':
            var porcentagem = '90%';
            skillName.innerText += `: ${porcentagem}`;
            bar.style = `background-image: linear-gradient(to right, var(--blue-color) ${porcentagem}, var(--second-bg-color) ${porcentagem});`;
            break;
        case 'java-script':
            var porcentagem = '70%';
            skillName.innerText += `: ${porcentagem}`;
            bar.style = `background-image: linear-gradient(to right, var(--blue-color) ${porcentagem}, var(--second-bg-color) ${porcentagem});`;
            break;
        case 'figma':
            var porcentagem = '50%';
            skillName.innerText += `: ${porcentagem}`;
            bar.style = `background-image: linear-gradient(to right, var(--blue-color) ${porcentagem}, var(--second-bg-color) ${porcentagem});`;
            break;
        case 'git':
            var porcentagem = '50%';
            skillName.innerText += `: ${porcentagem}`;
            bar.style = `background-image: linear-gradient(to right, var(--blue-color) ${porcentagem}, var(--second-bg-color) ${porcentagem});`;
            break;
        case 'api':
            var porcentagem = '40%';
            skillName.innerText += `: ${porcentagem}`;
            bar.style = `background-image: linear-gradient(to right, var(--blue-color) ${porcentagem}, var(--second-bg-color) ${porcentagem});`;
            break;
        case 'sql':
            var porcentagem = '50%';
            skillName.innerText += `: ${porcentagem}`;
            bar.style = `background-image: linear-gradient(to right, var(--blue-color) ${porcentagem}, var(--second-bg-color) ${porcentagem});`;
            break;
        case 'mongo-db':
            var porcentagem = '10%';
            skillName.innerText += `: ${porcentagem}`;
            bar.style = `background-image: linear-gradient(to right, var(--blue-color) ${porcentagem}, var(--second-bg-color) ${porcentagem});`;
            break;
        case 'node-js':
            var porcentagem = '10%';
            skillName.innerText += `: ${porcentagem}`;
            bar.style = `background-image: linear-gradient(to right, var(--blue-color) ${porcentagem}, var(--second-bg-color) ${porcentagem});`;
            break;
        case 'type-script':
            var porcentagem = '30%';
            skillName.innerText += `: ${porcentagem}`;
            bar.style = `background-image: linear-gradient(to right, var(--blue-color) ${porcentagem}, var(--second-bg-color) ${porcentagem});`;
            break;
            case 'react':
                var porcentagem = '30%';
                skillName.innerText += `: ${porcentagem}`;
                bar.style = `background-image: linear-gradient(to right, var(--blue-color) ${porcentagem}, var(--second-bg-color) ${porcentagem});`;
                break;
                case 'lgpd':
            var porcentagem = '10%';
            skillName.innerText += `: ${porcentagem}`;
            bar.style = `background-image: linear-gradient(to right, var(--blue-color) ${porcentagem}, var(--second-bg-color) ${porcentagem});`;
            break;
    }
});