// Editor.js
import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import { Card, Button, Space } from 'antd';

const TiptapEditor = ({ value, onChange }) => {
    const editor = useEditor({
        extensions: [StarterKit, Bold, Italic],
        content: value,
        onUpdate({ editor }) {
            onChange(editor.getHTML());
        },
    });

    if (!editor) {
        return null;
    }

    return (
        <Card bordered style={{ minHeight: 400 }}>
            <Space style={{ marginBottom: 16, display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Button onClick={() => editor.chain().focus().toggleBold().run()} type={editor.isActive('bold') ? 'primary' : 'default'}>
                    Bold
                </Button>
                <Button onClick={() => editor.chain().focus().toggleItalic().run()} type={editor.isActive('italic') ? 'primary' : 'default'}>
                    Italic
                </Button>
            </Space>
            <EditorContent editor={editor} />
        </Card>
    );
};

export default TiptapEditor;