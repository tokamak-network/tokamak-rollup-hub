'use client';
import { GeneralBtn } from "@/components/buttons/general-btn";
import { ImageBtn } from "@/components/buttons/image-button";
import CopyIcon from "../../../../public/icon-copy-default.svg"
import { devnetTemplate } from "@/lib/constants"
import JSONPretty from "react-json-pretty"

export default function LocalDeployPage() {
    const cloneRepoValue = 'git clone https://github.com/tokamak-network/tokamak-thanos'
    const makeBuildValue = 'make build'
    const devnetUpValue = 'make devnet-up'
    const cdGettingStartedValue = 'cd packages/tokamak/contract-bedrock/scripts/getting-started'
    const versionScriptValue = './versions.sh'
    const dockerComposeVersionValue = 'docker compose version'

    const copyToClipboard = async (text: string) => {
        await navigator.clipboard.writeText(text);
        alert('Copied to clipboard.');
    }

    return (
        <div className="max-w-[355px] md:max-w-[740px] xl:max-w-[1200px] xl:flex-rowitems-center xl:h-screen">
            <h1 className="text-4xl font-semibold text-center mb-[39px]">Local Deployment Guide</h1>
            <div className="flex flex-col xl:flex-row">
                <div className="flex flex-col gap-[33px] p-5 w-full xl:w-1/2">
                    <div className="flex flex-col gap-[15px]">
                        <h3 className="text-[21px] font-semibold">How to deploy rollup locally</h3>
                        <div className="text-[#7D899A] font-medium">
                            <p className="mb-[15px]">Please refer to this document for any prerequisite installations before deploying the rollup in your local environment.</p>
                            <p>Download the JSON file generated based on your input.  Your own rollup will be created.</p>
                        </div>
                        <GeneralBtn text='Download File' isDisabled={false} styleType='primary' size='md' />
                    </div>
                    <div className="flex flex-col gap-[9px]">
                        <p className="text-[#7D899A] font-medium">First, copy the repository below to the PCs you want to deploy locally.</p>
                        <div className="flex items-center gap-2 w-full justify-between bg-[#080A0E] rounded-xl py-[10px] px-[15px] border-[1px] border-[#192232]">
                            <input type="text" value={cloneRepoValue} className="w-full bg-transparent outline-none text-white caret-tokamak-blue overflow-x-scroll" readOnly />
                            <ImageBtn image={CopyIcon} onClick={() => copyToClipboard(cloneRepoValue)} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[9px]">
                        <div className="text-[#7D899A] font-medium">
                            <p className="mb-[15px]">json file and overwrite it with devnetL1-template.json.</p>
                            <p className="mb-[15px]">Go to the repository you cloned and type make build. This will install the various files for the rollup deployment.</p>
                        </div>
                        <div className="flex items-center gap-2 w-full justify-between bg-[#080A0E] rounded-xl py-[10px] px-[15px] border-[1px] border-[#192232]">
                            <input type="text" value={makeBuildValue} className="w-full bg-transparent outline-none text-white caret-tokamak-blue overflow-x-scroll" readOnly />
                            <ImageBtn image={CopyIcon} onClick={() => copyToClipboard(makeBuildValue)} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[9px]">
                        <p className="text-[#7D899A] font-medium">When all is done, type make devnet-up to deploy the rollup with the information from the build.</p>
                        <div className="flex items-center gap-2 w-full justify-between bg-[#080A0E] rounded-xl py-[10px] px-[15px] border-[1px] border-[#192232]">
                            <input type="text" value={devnetUpValue} className="w-full bg-transparent outline-none text-white caret-tokamak-blue overflow-x-scroll" readOnly />
                            <ImageBtn image={CopyIcon} onClick={() => copyToClipboard(devnetUpValue)} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[9px]">
                        <p className="text-[#7D899A] font-medium">If you need to check the version of a dependency you installed, type the following </p>
                        <div className="flex flex-col gap-[15px]">
                            <div className="flex items-center gap-2 w-full justify-between bg-[#080A0E] rounded-xl py-[10px] px-[15px] border-[1px] border-[#192232]">
                                <input type="text" value={cdGettingStartedValue} className="w-full bg-transparent outline-none text-white caret-tokamak-blue overflow-x-scroll" readOnly />
                                <ImageBtn image={CopyIcon} onClick={() => copyToClipboard(cdGettingStartedValue)} />
                            </div>
                            <div className="flex items-center gap-2 w-full justify-between bg-[#080A0E] rounded-xl py-[10px] px-[15px] border-[1px] border-[#192232]">
                                <input type="text" value={versionScriptValue} className="w-full bg-transparent outline-none text-white caret-tokamak-blue overflow-x-scroll" readOnly />
                                <ImageBtn image={CopyIcon} onClick={() => copyToClipboard(versionScriptValue)} />
                            </div>
                            <div className="flex items-center gap-2 w-full justify-between bg-[#080A0E] rounded-xl py-[10px] px-[15px] border-[1px] border-[#192232]">
                                <input type="text" value={dockerComposeVersionValue} className="w-full bg-transparent outline-none text-white caret-tokamak-blue overflow-x-scroll" readOnly />
                                <ImageBtn image={CopyIcon} onClick={() => copyToClipboard(dockerComposeVersionValue)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-1/2 xl:max-h-[950px] flex flex-col bg-gradient-card p-5 gap-5 rounded-2xl">
                    <h3 className="text-xl font-semibold">Rollup information</h3>
                    <div className="bg-black rounded-2xl p-4 overflow-auto">
                        <JSONPretty style={{ fontSize: "0.8rem" }} data={devnetTemplate} theme={{
                            'key': 'color:#92E391',
                            'string': 'color:#ABD6FC',
                            'value': 'color:#82C0FA',
                            'boolean': 'color:#82C0FA'
                        }}>
                        </JSONPretty>
                    </div>
                </div>
            </div>
        </div>
    )
}