import { Skill, Social } from "../typings";

export const getSocialData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

  const data = await res.json();

  return data.socials;
};

export const getSkillsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);

  const data = await res.json();

  return data.skills;
};

export const getPageInfoData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAbout`);
  const data = await res.json();

  return data.pageInfo;
};

export const getExperienceData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`
  );
  const data = await res.json();

  return data.experience;
};
export const getProjectsData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
  );
  const data = await res.json();

  return data;
};
