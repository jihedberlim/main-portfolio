import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { Skill, SkillCategory, skillCategories, skills } from '../../data/skills';
import { Icon, IconName } from '../../shared/icon';
import { Reveal } from '../../shared/reveal';
import { SectionHeading } from '../../shared/section-heading';

interface SkillGroup {
  category: SkillCategory;
  icon: IconName;
  items: Skill[];
}

const categoryIcons: Record<SkillCategory, IconName> = {
  frontend: 'code',
  backend: 'server',
  tools: 'wrench',
};

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal, SectionHeading],
  templateUrl: './skills.html',
})
export class Skills {
  protected readonly t = inject(I18nService).t;

  protected readonly skills = skills;

  protected readonly groups: SkillGroup[] = skillCategories.map((category) => ({
    category,
    icon: categoryIcons[category],
    items: skills.filter((skill) => skill.category === category),
  }));
}
